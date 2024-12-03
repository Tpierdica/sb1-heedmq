import React, { useState } from 'react';
import { Calendar, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { InfoTooltip } from './InfoTooltip';
import type { Clinic } from '../types/clinic';
import { theme } from '../styles/theme';

interface AppointmentsSectionProps {
  clinics: Clinic[];
}

export function AppointmentsSection({ clinics }: AppointmentsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const clinicsWithAppointments = clinics.filter(clinic => clinic.appointmentUrl);

  if (clinicsWithAppointments.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg shadow-lg p-6 mb-8 border border-primary/20" style={{ background: theme.colors.gradientTransparent }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-6 h-6 text-primary mr-2" />
          <h2 className="text-xl font-bold text-primary">Book an Appointment</h2>
          <InfoTooltip message="You will be routed to the veterinary clinics webpage to book an appointment. PetPals is not responsible for the actual booking of appointments, we offer our services as a directory, aimed at assisting you to find all relevant information in one place." />
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#ff69b4] hover:bg-[#ff69b4]/10 rounded-full p-1 transition-colors"
          aria-label={isExpanded ? "Collapse section" : "Expand section"}
        >
          {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
        </button>
      </div>

      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicsWithAppointments.map((clinic) => (
            <div
              key={clinic.id}
              className="rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-primary/20"
              style={{ background: theme.colors.gradientTransparent }}
            >
              <img
                src={clinic.image}
                alt={clinic.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-primary text-lg mb-2">
                  {clinic.name}
                </h3>
                <p className="text-primary/80 text-sm mb-4">
                  {clinic.address}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {clinic.services.slice(0, 3).map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <a
                  href={clinic.appointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Book Appointment
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}