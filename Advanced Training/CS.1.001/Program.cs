namespace CS._1._001
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string meterSerial=Console.ReadLine();
            int prevReading=Convert.ToInt32(Console.ReadLine());
            int currReading=Convert.ToInt32(Console.ReadLine());
            int units=currReading-prevReading;

            if (units<=0)
                Console.WriteLine("Invalid readings");
            else
            {
                double energyCharge=units*6.5;
                double total = energyCharge * 1.05;
                Console.WriteLine($"Meter Serial Number: {meterSerial} \t Units Consumed: {units} \t Energy Charge: {energyCharge} \t Total Amount (including 5% surcharge): {total}");

            }

        }
    }
}
