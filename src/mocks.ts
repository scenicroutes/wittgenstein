// Internal.
import { CreateAreaInput } from './Area';
import { CreateJobInput } from './Job';
import { CreatePhotoInput } from './Photo';
import { Zone, CreateZoneInput } from './Zone';

// Code.
export const createMockAreaInput = (area?: any): CreateAreaInput => {
  const _area = area || {};
  return {
    id: _area.id || '8ea8f412-4ee8-4f1d-9228-4c133b8fbd37',
    name: _area.name || 'Sant Marti',
    file: _area.file || 'sant-marti',
    lastScheduledAt: _area.lastScheduledAt || 0,
    refreshRate: _area.refreshRate || 86400,
    enabled: _area.enabled || true,
    zonesComputed: _area.zonesComputed || false,
  };
};

export const createMockJobInput = (job?: any): CreateJobInput => {
  const _job = job || {};
  return {
    id: _job.id || '7debb0f5-e53a-4df4-8c43-c96db89084f1',
    minUploadDate: _job.minUploadDate || 0,
    maxUploadDate: _job.maxUploadDate || 100000,
    page: _job.page || 1,
    zone: _job.zone || createMockZone(),
  };
};

export const createMockPhotoInput = (photo?: any): CreatePhotoInput => {
  const _photo = photo || {};
  return {
    id: _photo.id || '32457360587',
    owner: _photo.owner || '41710899@N08',
    secret: _photo.secret || '69b27ceb18',
    server: _photo.server || '4898',
    farm: _photo.farm || 5,
    title: _photo.title || 'Arc de Triomf',
    description:
      _photo.description ||
      'The Arc de Triomf was built as the entrance of the 1888 Barcelona Universal Exposition. It was designed by architect Josep Vilaseca i Casanovas in the Neo-Mudéjar style.',
    ownername: _photo.ownername || 'jdf_92',
    views: _photo.views || 16,
    tags: _photo.tags || [
      'spain',
      'barcelona',
      'arcdetriomf',
      '1888barcelonaworldfair',
      'neomudéjar',
      '1888barcelonauniversalexposition',
      'catelonia',
    ],
    latitude: _photo.latitude || 41.390791,
    longitude: _photo.longitude || 2.18114,
    context: _photo.context || 0,
    zoneId: _photo.zoneId || '4ab7068b-6c6c-46d2-8009-1d7d1ab35a3b',
    inside: _photo.inside || true,
  };
};

export const createMockZoneInput = (zone?: any): CreateZoneInput => {
  const _zone = zone || {};
  return {
    id: _zone.id || '4ab7068b-6c6c-46d2-8009-1d7d1ab35a3b',
    area: _zone.area || '8ea8f412-4ee8-4f1d-9228-4c133b8fbd37',
    bbox: _zone.bbox || [2.18, 41.4, 2.19, 41.5],
    zone: _zone.zone || {
      geometry: {
        coordinates: [[[2.18, 41.4], [2.19, 41.5], [2.19, 41.4], [2.18, 41.4]]],
        type: 'Polygon',
      },
      properties: {},
      type: 'Feature',
    },
  };
};

export const createMockZoneMultiPolygonInput = (
  zone?: any
): CreateZoneInput => {
  const _zone = zone || {};
  return {
    id: _zone.id || '4ab7068b-6c6c-46d2-8009-1d7d1ab35a3b',
    area: _zone.area || '8ea8f412-4ee8-4f1d-9228-4c133b8fbd37',
    bbox: _zone.bbox || [2.18, 41.4, 2.19, 41.5],
    zone: _zone.zone || {
      geometry: {
        coordinates: [
          [[[2.18, 41.4], [2.19, 41.5], [2.19, 41.4], [2.18, 41.4]]],
          [[[2.18, 41.4], [2.18, 41.5], [2.19, 41.5], [2.18, 41.4]]],
        ],
        type: 'MultiPolygon',
      },
      properties: {},
      type: 'Feature',
    },
  };
};

export const createMockZone = (): Zone =>
  Zone.create(createMockZoneInput()) as Zone;
