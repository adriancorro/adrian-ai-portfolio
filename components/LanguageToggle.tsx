"use client";
import { useLanguage } from "./LanguageProvider";
export function LanguageToggle(){const {language,setLanguage}=useLanguage();return <div className="languageToggle" role="group" aria-label="Language selector"><button className={language==="en"?"active":""} onClick={()=>setLanguage("en")} aria-pressed={language==="en"}>EN</button><span>/</span><button className={language==="es"?"active":""} onClick={()=>setLanguage("es")} aria-pressed={language==="es"}>ES</button></div>}
