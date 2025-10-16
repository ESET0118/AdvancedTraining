using System;
using System.Collections.Generic;

namespace CS._3._019
{
    // -------------------- INTERFACES --------------------
    public interface IBillingRule
    {
        double Compute(int units);
    }

    public interface IRebate
    {
        string Code { get; }
        double Apply(double currentTotal, int outageDays);
    }

    // -------------------- IMPLEMENTATIONS --------------------

    // Commercial billing rule
    public class CommercialRule : IBillingRule
    {
        public double Compute(int units)
        {
            return (8.5 * units) + 150; // rate + fixed charge
        }
    }

    // No outage rebate (-2%)
    public class NoOutageRebate : IRebate
    {
        public string Code => "NO_OUTAGE";

        public double Apply(double currentTotal, int outageDays)
        {
            return outageDays == 0 ? -currentTotal * 0.02 : 0;
        }
    }

    // High usage rebate (-3%)
    public class HighUsageRebate : IRebate
    {
        public string Code => "HIGH_USAGE";

        public double Apply(double currentTotal, int outageDays)
        {
            return -currentTotal * 0.03; // always based on total if units>500 (handled in main)
        }
    }

    // -------------------- CONTEXT --------------------
    public class BillingContext
    {
        public IBillingRule Rule { get; }
        public List<IRebate> Rebates { get; }

        public BillingContext(IBillingRule rule) => Rule = rule;

        public double Finalize(int units, int outageDays)
        {
            double subtotal = Rule.Compute(units);
            Console.WriteLine($"Subtotal: ₹ {subtotal:F2}");

            double total = subtotal;
            foreach (var r in Rebates)
            {
                double delta = r.Apply(subtotal, outageDays);
                Console.WriteLine($"Rebate applied: {r.Code} {delta:F2}");
                total += delta;
            }

            return total;
        }
    }

    // -------------------- MAIN PROGRAM --------------------
    internal class Program
    {
        static void Main(string[] args)
        {
            int units = 620;
            int outageDays = 0;

            var context = new BillingContext(new CommercialRule());
            context.Rebates.Add(new NoOutageRebate());
            context.Rebates.Add(new HighUsageRebate());

            double final = context.Finalize(units, outageDays);

            Console.WriteLine($"Final Total: ₹ {final:F2}");
        }
    }
}
