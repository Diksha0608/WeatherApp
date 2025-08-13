import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { useReverseGeocodeQuery } from "@/hooks/use-weather";
import { AlertTriangle, MapPin, RefreshCcw } from "lucide-react";


const WeatherDashboard = () => {
   const {
    coordinates,
    error:locationError,
    getLocation,
    isLoading:locationLoading
   } 
   =useGeolocation();

 const locationQuery = useReverseGeocodeQuery(coordinates)
 console.log(locationQuery)

   const handleRefresh = ()=>{
    getLocation();
    if(coordinates){
      // reload weather data
    }
   };

   if(locationLoading){
return <WeatherSkeleton/>
   }
    if (locationError) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button variant="outline" onClick={getLocation} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if(!coordinates){
return (
    <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Please enable location access to see your location access Weather</p>
          <Button variant="outline" onClick={getLocation} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
);
  }
   

  return (
    <div className="space-y-4">
      {/* Favotite cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button variant={'outline'}
        size={'icon'}
        onClick={handleRefresh}

        >
          <RefreshCcw className="h-4 w-4"/>
        </Button>
      </div>

      {/* current and hourly weather */}
    </div>
  )
}

export default WeatherDashboard;
