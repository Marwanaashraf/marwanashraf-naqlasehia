import React from 'react'

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-200 dark:bg-slate-900 z-50">
      <i className="fa-solid fa-spinner fa-spin text-main text-5xl"></i>
    </div>
  )
}
