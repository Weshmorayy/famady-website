'use client'

import React, { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { MobileDrawer } from '@/components/layout/MobileDrawer'

export default function ContactPageClient() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <>
      <Header setDrawerOpen={setDrawerOpen} />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
