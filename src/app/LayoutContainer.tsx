'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes';

type Props = {
    children: React.ReactNode;
};

export default function LayoutContainer({ children }: Props) {
  return (
    <ThemeProvider attribute='class'>{children}</ThemeProvider>
  )
}
