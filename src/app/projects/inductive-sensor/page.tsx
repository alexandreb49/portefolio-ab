'use client'

import React from 'react'
import Image from 'next/image'
import { Cpu, Code, Server, Database, CheckCircle } from 'lucide-react';

function InductiveSensor() {
  const keywords = ["Sensor", "Electromagnetism", "Electrokinetics", "Electronics", "Programming"];
  const projectGoals = [
    "Understand the behavior of a coil’s inductance in the presence of ferromagnetic materials.",
    "Develop a sensor capable of detecting a parked vehicle using electromagnetic induction.",
    "Create a software program to display the data sent by the sensor to users."
  ];

  return (
    <div className="bg-white min-h-screen px-6 py-12 mx-32">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Inductive Sensor Project</h1>

      {/* Keywords */}
      <div className="mb-8 flex flex-wrap gap-2">
        {keywords.map((k, idx) => (
          <span
            key={idx}
            className="bg-blue-200 text-blue-800 px-4 py-1 rounded-full font-medium text-sm"
          >
            {k}
          </span>
        ))}
      </div>

      {/* Project Description */}
      <p className="mb-8 text-gray-700">
        For my college entrance exam, I built an inductive sensor that sends data to a Python program using a Wemos D1 board.
        The program performs signal analysis to determine whether a car is parked or not.
      </p>

      {/* Problematic */}
      <section className="mb-8">
        <p className="text-gray-800 font-bold text-xl">
          How can we detect a vehicle using the phenomenon of electromagnetic induction?
          How can the information captured by the system be communicated to users?
        </p>
      </section>

      <div className='grid grid-cols-2 gap-8'>
        {/* Project Goals */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Goals</h2>
          <ul className="space-y-3">
            {projectGoals.map((goal, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-blue-600 mt-1" />
                <span className="text-gray-700">{goal}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies Used */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <ul className="my-1.5 space-y-3">
            <li className="flex items-center gap-3">
              <Cpu size={30} className="text-blue-600" />
              Simple electronic components: capacitor, inductor, resistor, operational amplifier. IoT Development Board: Wemos D1.
            </li>
            <li className="flex items-center gap-3">
              <Code size={20} className="text-blue-600" />
              Python for a REST API and user interface
            </li>
            <li className="flex items-center gap-3">
              <Database size={20} className="text-blue-600" />
              PostgreSQL Database for storing sensor state
            </li>
          </ul>
        </section>
      </div>

      {/* Project Steps */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Project</h2>
        <div className='grid grid-cols-2 gap-6'>
          <div>
            <h3 className='font-bold mb-2'>Study of the Phenomenon</h3>
            <p>Here is some random text about the project describing the study of electromagnetic induction and sensor behavior.</p>
            <h3 className='font-bold mt-4 mb-2'>Prototyping</h3>
            <p>Details about building the prototype, wiring the Wemos D1, and testing sensor response.</p>
          </div>
          <div>
            {/* Placeholder for images or diagrams */}
            <Image src="/diagramme_inductif.svg" height={400} width={400} alt="Inductive Diagram" className="rounded-lg shadow" />
          </div>
        </div>
      </section>

      {/* Conclusion & Improvements */}
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
