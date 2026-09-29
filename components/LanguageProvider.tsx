"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
export type Language = "en" | "es";
type Ctx = { language: Language; setLanguage:(l:Language)=>void };
const LanguageContext=createContext<Ctx|undefined>(undefined);
export function LanguageProvider({children}:{children:ReactNode}){
 const [language,setLanguageState]=useState<Language>("en");
 useEffect(()=>{ const saved=localStorage.getItem("portfolio-language"); if(saved==="es"||saved==="en") setLanguageState(saved); },[]);
 const setLanguage=(l:Language)=>{ setLanguageState(l); localStorage.setItem("portfolio-language",l); document.documentElement.lang=l; };
 useEffect(()=>{document.documentElement.lang=language;},[language]);
 return <LanguageContext.Provider value={{language,setLanguage}}>{children}</LanguageContext.Provider>;
}
export function useLanguage(){const c=useContext(LanguageContext); if(!c) throw new Error("useLanguage must be used inside LanguageProvider"); return c;}
