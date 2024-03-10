import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "yrelative yflex yw-full ytouch-none yselect-none yitems-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="yrelative yh-2 yw-full ygrow yoverflow-hidden yrounded-full ybg-gray-100 dark:ybg-gray-800">
      <SliderPrimitive.Range className="yabsolute yh-full ybg-gray-900 dark:ybg-gray-50" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="yblock yh-5 yw-5 yrounded-full yborder-2 yborder-gray-900 ybg-white yring-offset-white ytransition-colors focus-visible:youtline-none focus-visible:yring-2 focus-visible:yring-gray-950 focus-visible:yring-offset-2 disabled:ypointer-events-none disabled:yopacity-50 dark:yborder-gray-50 dark:ybg-gray-950 dark:yring-offset-gray-950 dark:focus-visible:yring-gray-300" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
