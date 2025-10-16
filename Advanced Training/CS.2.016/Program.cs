using System;

namespace CS._2._016
{
    class LoadProfileDay
    {
        public DateTime Date { get; }
        public int[] HourlyKwh { get; } // length 24
        public LoadProfileDay(DateTime date, int[] hourly)
        {
            Date = date;
            bool flag = true;
            foreach(int i in hourly)
            {
                if(i<0)
                flag = false;
            }
            if(flag==true)
            HourlyKwh = hourly;
            // clone array; validate length == 24; values >= 0
        }
        public int Total()
        {
            int sum = 0;
            foreach (int i in HourlyKwh)
            {
                sum += i;
            }
            return sum;
        }
        public int PeakHour()
        {
            int maxi = 0;
            for(int i = 0; i < 24; i++)
            {
                maxi=Math.Max(maxi, HourlyKwh[i]);
            }
            return maxi;
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 };
            LoadProfileDay lpd = new LoadProfileDay(DateTime.Now, arr);
            Console.WriteLine($"Total: {lpd.Total()}");
            Console.WriteLine($"Max: {lpd.PeakHour()}");
        }
    }
}
