import React from 'react'
import { Card, CardContent, CardHeader} from '@mui/material';

const Result = () => {
  const results = [
    { date: "2023-05-20", test: "Blood Pressure", result: "130/85 mmHg" },
    { date: "2023-05-20", test: "Blood Glucose", result: "110 mg/dL" },
    { date: "2023-04-15", test: "Cholesterol", result: "Total: 180 mg/dL, LDL: 100 mg/dL, HDL: 50 mg/dL" },
  ]

  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Recent Test Results</CardTitle> */}
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {results.map((result, index) => (
            <li key={index} className="border-b pb-2 last:border-b-0">
              <p className="font-semibold">{result.date} - {result.test}</p>
              <p>{result.result}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default Result
