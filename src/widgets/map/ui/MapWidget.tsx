import { NaverMapView } from '@/entities/map/ui/NaverMapView';
import { MapConfig } from '@/shared/types';

interface MapWidgetProps {
  config: MapConfig;
}

export function MapWidget({ config }: MapWidgetProps) {
  return (
    <section className="w-full">
      <div className="mb-4 text-center">
        <h2 className="text-xl font-semibold mb-2">찾아오시는 길</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">{config.address}</p>
      </div>
      <NaverMapView config={config} />
    </section>
  );
}
