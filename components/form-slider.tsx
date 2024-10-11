"use client";

import React, { useState } from "react";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface SingleSliderInterface {
  name?: string;
}

const SingleSlider = ({ name }: SingleSliderInterface) => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (value: number[]) => {
    setValue(value[0]);
  }

  return (
    <React.Fragment>
      <Label htmlFor="single-slider">{name}: {value}</Label>
      <Slider
        id="single-slider"
        min={0}
        max={100}
        step={1}
        value={[value]}
        onValueChange={handleSliderChange}
      />
    </React.Fragment>
  );
}

export { SingleSlider };
