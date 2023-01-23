import React, { FC, PropsWithChildren } from "react"

export enum CardVariant {
  outlined = "outlined",
  primary = "primary"
}

interface CardProps {
  width?: string
  height?: string
  variant: CardVariant
  onClick?: (number: number) => void
}

const Card: FC<PropsWithChildren<CardProps>> =
  ({
     width,
     height,
     children,
     variant
   }) => {
    return (
      <div
        style={{
          width, height,
          border: variant === CardVariant.outlined ? "1px solid gray" : "none",
          background: variant === CardVariant.outlined ? "lightgray" : ""
        }}>
        {children}
      </div>
    )
  }

export default Card
