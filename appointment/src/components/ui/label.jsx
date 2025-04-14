import * as React from "react"

const Label = React.forwardRef(({ className, htmlFor, ...props }, ref) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 ${className}`}
      ref={ref}
      {...props}
    />
  )
})

Label.displayName = "Label"

export { Label }
