using System;

namespace CS._1._011
{
    public class Meter
    {
        public string MeterSerial;
        public string Location;
        public DateTime InstalledOn;
        public int LastReadingKwh;

        public Meter(string MeterSerial, string Location, int LastReadingKwh)
        {
            this.MeterSerial = MeterSerial;
            this.Location = Location;
            this.LastReadingKwh = LastReadingKwh;
        }
        public void AddReading(int deltaKwh)
        {
            if(deltaKwh>0)
                LastReadingKwh+= deltaKwh;
        }

        public string Summary()
        {
            return ($"{MeterSerial}\tLocation: {Location} \t|\t Reading: {LastReadingKwh}");
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            Meter meter1 = new Meter("AP-0001","Feeder-12",15230);
            Meter meter2 = new Meter("AP-0002", "DTR-9", 9800);
            meter1.AddReading(5000);
            meter2.AddReading(-5000);
            Console.WriteLine(meter1.Summary());
            Console.WriteLine(meter2.Summary());
        }
    }
}
