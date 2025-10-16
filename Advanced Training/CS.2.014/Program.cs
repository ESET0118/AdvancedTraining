using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CS._2._014
{
    public interface IReadable
    {
        int ReadKwh();
        string SourceID { get; }
    }
    public class DlmsMeter : IReadable
    {
        public string SourceID { get; } = "DLMS-Meter";
        public int ReadKwh()
        {
            Random random = new Random();
            return random.Next(1, 11);
        }
    }

    public class ModemGateway : IReadable
    {
        public string SourceID { get; } = "Modem-Gateway";
        public int ReadKwh()
        {
            Random random = new Random();
            return random.Next(1, 11);
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            List<IReadable> devices = new List<IReadable>()
            {
                new DlmsMeter(),
                new ModemGateway()
            };
            for (int i = 0; i < 5; i++)
            {
                foreach (var device in devices)
                {
                    Console.WriteLine($"{device.SourceID} - {device.ReadKwh()} kWh");
                }
                Console.WriteLine();

            }
        }
    }
}
