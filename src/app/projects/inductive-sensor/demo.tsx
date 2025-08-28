'use client'

import React from 'react'
import Image from 'next/image'
import { Cpu, Code, Database, CheckCircle } from 'lucide-react';

function InductiveSensor() {
  const keywords = ["Sensor", "Electromagnetism", "Electrokinetics", "Electronics", "Programming"];
  const projectGoals = [
    "Understand the behavior of a coil’s inductance in the presence of ferromagnetic materials.",
    "Develop a sensor capable of detecting a parked vehicle using electromagnetic induction.",
    "Create a software program to display the data sent by the sensor to users."
  ];

  return (
    <div className="bg-white min-h-screen px-6 py-12 mx-32 w-full">




      <div className='grid grid-cols-2 gap-8 w-full'>
        <section className="mb-8">

        </section>

        <section className="mb-8">
          
        </section>
      </div>

      <section className="mb-8 w-full">

      </section>

      <section className="mb-8 bg-blue-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Conclusion & Improvements</h2>
        <p className="text-gray-700 mb-2">
          The project successfully demonstrates the ability to detect a vehicle using an inductive sensor and display the results via a Python program.
        </p>
        <p className="text-gray-700">
          Future improvements could include a mobile app instead of a desktop one, integrating real-time notifications for users,
          and optimizing the software interface for better usability. Additional studies could improve sensor accuracy and robustness.
        </p>
      </section>
    </div>
  )
}

export default InductiveSensor
