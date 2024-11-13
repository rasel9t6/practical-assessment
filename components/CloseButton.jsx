"use client";

import { useState } from "react";

export default function CloseButton() {
    const [openDetails, setOpenDetails] = useState(false);
    
  const handleDetailsOpen = (id) => {
    setOpenDetails(true);
  
  };
  return <button onClick={() => setOpenDetails(false)}>Close</button>;
}