"use client"
import { useState } from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import { CardProps } from "@/types/index";

interface CardProps {
    car: CardProps;
}

const CardCard = ({ car }) => {
  return (
    <div>CardCard</div>
  )
}

export default CardCard