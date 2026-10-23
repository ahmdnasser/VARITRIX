import {randomUUID} from "node:crypto";

const WINDOW_MS=15*60*1000,MAX_REQUESTS=5,visitors=new Map();
const clean=(value,max=200)=>String(value||"").trim().replace(/[<>]/g,"").slice(0,max);
function limited(ip){const now=Date.now(),recent=(visitors.get(ip)||[]).filter(time=>now-time<WINDOW_MS);if(recent.length>=MAX_REQUESTS)return true;recent.push(now);visitors.set(ip,recent);return false}

async function saveLead(lead){
  const endpoint=process.env.GOOGLE_APPS_SCRIPT_URL,secret=process.env.APPS_SCRIPT_SHARED_SECRET;
  if(!endpoint||!secret)throw Error("Lead delivery is not configured");
  const upstream=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({token:secret,lead}),signal:AbortSignal.timeout(10000)});
  if(!upstream.ok)throw Error("Lead delivery failed");
  let result;try{result=await upstream.json()}catch{throw Error("Invalid lead delivery response")}
  if(!result?.ok)throw Error("Lead delivery rejected");
}

export default async function handler(request,response){
  response.setHeader("Cache-Control","no-store");
  if(request.method!=="POST")return response.status(405).json({error:"Method not allowed"});
  const origin=request.headers.origin,host=request.headers.host;
  if(origin&&host&&new URL(origin).host!==host)return response.status(403).json({error:"Invalid origin"});
  const ip=(request.headers["x-forwarded-for"]||"unknown").toString().split(",")[0].trim();
  if(limited(ip))return response.status(429).json({error:"Too many requests. Please try again later."});
  const body=request.body||{},startedAt=Number(body.startedAt),name=clean(body.name,120),email=clean(body.email,160),phone=clean(body.phone,40),company=clean(body.company,120),city=clean(body.city,80)||"Sadat City",service=clean(body.service,80),message=clean(body.message,2000);
  if(body.website)return response.status(204).end();
  if(!Number.isFinite(startedAt)||Date.now()-startedAt<1200||Date.now()-startedAt>86400000)return response.status(400).json({error:"Invalid submission"});
  if(!name||!phone||!service||!message||!body.consent||!/^\S+@\S+\.\S+$/.test(email))return response.status(400).json({error:"Please complete all required fields."});
  try{
    await saveLead({id:randomUUID(),submittedAt:new Date().toISOString(),name,email,phone,company,city,service,message,source:"Website"});
    return response.status(201).json({ok:true});
  }catch{return response.status(503).json({error:"Unable to save request right now."})}
}
