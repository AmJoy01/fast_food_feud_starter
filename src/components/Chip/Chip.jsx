import * as React from "react"
import "./Chip.css"
import { useState } from "react"


export function Chip({ label = "", isActive = false, onClick = () => {}, onClose=()=>{} }) {
  let buttonClassName;
  (isActive)?buttonClassName = "chip active":buttonClassName="chip";
  return (
    <button className={buttonClassName} onClick = {onClick}>
      <p className="label">{label}</p>
      <span className="close" onClick = {onClose} role="button">{`X`}</span>
    </button>
  )
}

export default Chip
