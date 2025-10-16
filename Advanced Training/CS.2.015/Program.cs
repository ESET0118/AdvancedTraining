using System;

namespace CS._2._015
{
    public interface IBillingRule
    {
        double Compute(int units);
    }
    public class DomesticRule : IBillingRule
    {
        public double Compute(int units)
        {
            return 6 * units+50;
        }
    }
    public class CommercialRule : IBillingRule
    {
        public double Compute(int units)
        {
            return 8.5 * units + 150;
        }
    }
    public class AgriculturalRule : IBillingRule
    {
        public double Compute(int units)
        {
            return 3 * units;
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            IBillingRule rule = null;
            Console.WriteLine("Enter the type of connection (D/C/A): ");
            char ch = Convert.ToChar(Console.ReadLine());
            switch (ch)
            {
                case 'D':
                    rule = new DomesticRule();
                    break;
                case 'C':
                    rule = new CommercialRule();
                    break;
                case 'A':
                    rule = new AgriculturalRule();
                    break;
                default:
                    Console.WriteLine("Invalid Connection Type");
                    break;
            }
            if (rule != null)
            {
                double amount = rule.Compute(120);
                Console.WriteLine("The bill amount is: " + amount);
            }
        }
    }
}
