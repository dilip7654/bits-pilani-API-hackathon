import React from 'react'
import { Card, CardContent, CardHeader} from '@mui/material';
const History = () => {
  return (
    <Card>
    <CardHeader>
      {/* <CardTitle>Medical History</CardTitle> */}
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-5 space-y-2">
        <li>Hypertension (diagnosed 2015)</li>
        <li>Type 2 Diabetes (diagnosed 2018)</li>
        <li>Appendectomy (2010)</li>
        <li>Allergies: Penicillin</li>
      </ul>
    </CardContent>
  </Card>
  )
}

export default History
