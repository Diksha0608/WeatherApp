import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";


const WeatherDashboard = () => {
  return (
    <div className="space-y-4">
      {/* Favotite cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button variant={'outline'}
        size={'icon'}
        // onClick={handleRefresh}

        >
          <RefreshCcw className="h-4 w-4"/>
        </Button>
      </div>

      {/* current and hourly weather */}
    </div>
  )
}

export default WeatherDashboard;
