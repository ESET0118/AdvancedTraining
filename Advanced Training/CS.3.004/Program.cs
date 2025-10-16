using System;

namespace CS._3._004
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[][] meters = new int[][]
            {
                new[] { 4, 5, 0, 0, 6, 7, 3 }, // A
                new[] { 2, 2, 2, 2, 2, 2, 2 }, // B
                new[] { 9, 1, 1, 1, 1, 1, 1 }  // C
            };

            string[] ids = { "A-1001", "B-2001", "C-3001" };

            int globalMax = int.MinValue;
            string globalMeter = "";
            int globalDay = -1;

            // Loop through each meter
            for (int i = 0; i < meters.Length; i++)
            {
                int total = 0;
                bool peakAlert = false;
                bool sustainedOutage = false;

                // Calculate total, peak alert, outage
                for (int j = 0; j < meters[i].Length; j++)
                {
                    int value = meters[i][j];
                    total += value;

                    if (value > 8)
                        peakAlert = true;

                    // Check for two consecutive zero days
                    if (j > 0 && meters[i][j] == 0 && meters[i][j - 1] == 0)
                        sustainedOutage = true;

                    // Track global max
                    if (value > globalMax)
                    {
                        globalMax = value;
                        globalMeter = ids[i];
                        globalDay = j + 1; // +1 for 1-based day
                    }
                }

                double avg = total / 7.0;

                Console.WriteLine($"{ids[i]} | Total:{total} Avg:{avg:F2} | " +
                    $"Peak:{(peakAlert ? "Yes" : "No")} | " +
                    $"SustainedOutage:{(sustainedOutage ? "Yes" : "No")}");
            }

            Console.WriteLine($"\nHighest Day: {globalMax} kWh | Meter: {globalMeter} | Day: {globalDay}");
        }
    }
}
