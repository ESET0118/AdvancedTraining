using System;

namespace CS._1._012
{
    public class Tariff
    {
        public string Name{get; set;}
        public double RateKwh { get; set; }
        public double FixedCharge { get; set; }

        public Tariff(string name)
        {
            Name = name;
            RateKwh = 6.0;
            FixedCharge = 50.0;
        }
        public Tariff(string name,double rate)
        {
            Name = name;
            RateKwh = rate;
            FixedCharge = 50.0;
        }
        public Tariff(string name,double rate,double fixedCharge)
        {
            Name = name;
            RateKwh = rate;
            FixedCharge = fixedCharge;
        }
        public double ComputeBill(int units)
        {
            return (units * RateKwh) + FixedCharge;
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Tariff t1 = new Tariff("DOMESTIC");
            Tariff t2 = new Tariff("COMMERCIAL", 7.5);
            Tariff t3 = new Tariff("AGRI", 8.5, 100.0);
            Console.WriteLine($"{t1.Name}: Rs.{t1.ComputeBill(120)}");
            Console.WriteLine($"{t2.Name}: Rs.{t2.ComputeBill(120)}");
            Console.WriteLine($"{t3.Name}: Rs.{t3.ComputeBill(120)}");
        }
    }
}
