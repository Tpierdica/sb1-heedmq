import React from 'react';
import { AlertCircle, Clock, Phone } from 'lucide-react';
import type { EmergencyInfo as EmergencyInfoType } from '../types/clinic';

interface EmergencyInfoProps {
  emergency: EmergencyInfoType;
  phone: string;
}

export function EmergencyInfo({ emergency, phone }: EmergencyInfoProps) {
  return (
    <div className="mt-4 border-t border-primary/20 pt-4">
      <div className="flex items-center mb-3">
        <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
        <h4 className="text-primary font-medium">Emergency Services</h4>
      </div>

      <div className="space-y-2 text-sm">
        {emergency.available24Hours ? (
          <div className="flex items-center text-primary/80">
            <Clock className="w-4 h-4 mr-2 shrink-0 text-green-500" />
            <span className="text-green-500">Available 24/7</span>
          </div>
        ) : (
          emergency.outOfHoursInfo && (
            <div className="flex items-start text-primary/80">
              <Clock className="w-4 h-4 mr-2 mt-1 shrink-0" />
              <span>{emergency.outOfHoursInfo}</span>
            </div>
          )
        )}

        <div className="flex items-center text-primary/80">
          <Phone className="w-4 h-4 mr-2 shrink-0" />
          <a 
            href={`tel:${emergency.emergencyPhone || phone}`}
            className="hover:text-primary transition-colors"
          >
            {emergency.emergencyPhone || phone}
          </a>
        </div>

        {emergency.emergencyServices.length > 0 && (
          <div className="mt-2">
            <div className="flex flex-wrap gap-2">
              {emergency.emergencyServices.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 bg-white text-[#003da6] rounded-full text-xs font-medium shadow-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}