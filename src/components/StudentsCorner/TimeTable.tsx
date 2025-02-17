import React from 'react';

interface TimeTableProps {
  data: {
    time: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
  }[];
}

export function TimeTable({ data }: TimeTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monday</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tuesday</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wednesday</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thursday</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Friday</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.time}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.monday}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.tuesday}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.wednesday}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.thursday}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.friday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}