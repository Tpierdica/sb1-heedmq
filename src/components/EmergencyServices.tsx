import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp, Phone, Clock } from 'lucide-react';
import type { Clinic } from '../types/clinic';
import { theme } from '../styles/theme';
import { isClinicOpen } from '../utils/clinicStatus';
import { InfoTooltip } from './InfoTooltip';

interface EmergencyServicesProps {
  clinics: Clinic[];
}

export function EmergencyServices({ clinics }: EmergencyServicesProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const emergencyClinics = clinics.filter(clinic => clinic.emergency);

  return (
    <div 
      className="rounded-lg shadow-lg p-6 mb-8 border border-primary/20" 
      style={{ background: theme.colors.tiles.gradient1 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary mr-2" />
          <h2 className="text-2xl font-bold text-primary">Emergency Vet Services</h2>
          <InfoTooltip message="Please select filter icon to show full details and locations" />
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
          {emergencyClinics.map((clinic) => {
            const isOpen = isClinicOpen(clinic);
            
            return (
              <div
                key={clinic.id}
                className="rounded-lg overflow-hidden border border-primary/20 p-6"
                style={{ background: theme.colors.tiles.gradient2 }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">{clinic.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <span className={`text-sm font-medium ${clinic.emergency?.available24Hours ? 'text-green-600' : 'text-red-500'}`}>
                      {clinic.emergency?.available24Hours ? '24/7 Emergency Service' : clinic.emergency?.outOfHoursInfo}
                    </span>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-primary" />
                    <a 
                      href={`tel:${clinic.emergency?.emergencyPhone || clinic.phone}`}
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      {clinic.emergency?.emergencyPhone || clinic.phone}
                    </a>
                  </div>

                  <div>
                    <h4 className="text-primary font-medium mb-2">Emergency Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {clinic.emergency?.emergencyServices.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 bg-white text-primary rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}