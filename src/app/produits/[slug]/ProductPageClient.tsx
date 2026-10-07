'use client'

import React, { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { MobileDrawer } from '@/components/layout/MobileDrawer'

// Client wrapper pour Header + MobileDrawer sur une page Server Component
export default function ProductPageClient() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <Header setDrawerOpen={setDrawerOpen} />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
