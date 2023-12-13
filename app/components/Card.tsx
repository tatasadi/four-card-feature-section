export default function Card({
  title,
  text,
  imgSrc,
  color,
  className = '',
  ...otherProps
}: {
  title: string
  text: string
  imgSrc: string
  color: string
  className: string
}) {
  return (
    <div className={`${className} flex h-full items-center justify-center`}>
      <div
        className="flex w-[19.4375rem] flex-col items-start rounded-lg border-t-[0.222rem] bg-white px-7 py-[1.69rem] text-left shadow-[0_15px_30px_-11px_rgba(131,166,210,0.50)]"
        {...otherProps}
        style={{ borderColor: color }}
      >
        <h1 className="text-xl font-bold text-very-dark-blue">{title}</h1>
        <p className="mb-[2.06rem] text-[0.8125rem] leading-[1.4375rem] tracking-[0.00563rem] text-very-dark-blue opacity-50">
          {text}
        </p>
        <img src={imgSrc} alt={`${title} icon`} className="self-end" />
      </div>
    </div>
  )
}
