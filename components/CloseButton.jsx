"use client";
export default function CloseButton() {
    const [openDetails, setOpenDetails] = useState(false);
    
  const handleDetailsOpen = (id) => {
    setOpenDetails(true);
  
  };
  return <button onClick={() => setOpenDetails(false)}>Close</button>;
}