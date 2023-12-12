import React from "react"

export default function Card({
  title,
  text,
  imgSrc,
  color,
}: {
  title: string
  text: string
  imgSrc: string
  color: string
}) {
  return (
    <div
      className="border-t-[0.222rem] shadow-[0_15px_30px_-11px_rgba(131,166,210,0.50)] w-[19.4375rem] rounded-lg bg-white px-7 py-[1.69rem] text-left flex flex-col items-start mb-[1.56rem]"
      style={{ borderColor: color }}
    >
      <h1 className="text-xl font-bold text-very-dark-blue">{title}</h1>
      <p className="text-[0.8125rem] leading-[1.4375rem] tracking-[0.00563rem] text-very-dark-blue opacity-50 mb-[2.06rem]">
        {text}
      </p>
      <img src={imgSrc} alt={`${title} icon`} className="self-end" />
    </div>
  )
}
