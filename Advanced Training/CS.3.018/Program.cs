using System;
using System.Collections.Generic;

namespace CS._3._018
{
    public interface IDataIngestor
    {
        string Name { get; }
        IEnumerable<(DateTime ts, int kwh)> ReadBatch(int count);
    }

    public class DlmsIngestor : IDataIngestor
    {
        private DateTime _start = DateTime.Now;
        private Random _rand = new Random();

        public string Name => "Dlms";

        public IEnumerable<(DateTime ts, int kwh)> ReadBatch(int count)
        {
            for (int i = 0; i < count; i++)
            {
                yield return (_start.AddHours(i), _rand.Next(1, 6));
            }
        }
    }

    public class CsvIngestor : IDataIngestor
    {
        private string[] _lines;

        public CsvIngestor(string[] lines) => _lines = lines;

        public string Name => "CSV";

        public IEnumerable<(DateTime ts, int kwh)> ReadBatch(int count)
        {
            for (int i = 0; i < Math.Min(count, _lines.Length); i++)
            {
                var parts = _lines[i].Split(',');
                yield return (DateTime.Parse(parts[0]), int.Parse(parts[1]));
            }
        }
    }
    public class RandomOutageDecorator : IDataIngestor
    {
        private IDataIngestor _inner;
        private Random _rand = new Random();

        public RandomOutageDecorator(IDataIngestor inner) => _inner = inner;

        public string Name => _inner.Name + "+Outage";

        public IEnumerable<(DateTime ts, int kwh)> ReadBatch(int count)
        {
            foreach (var (ts, kwh) in _inner.ReadBatch(count))
            {
                int newKwh = (_rand.NextDouble() < 0.2) ? 0 : kwh; // 20% chance outage
                yield return (ts, newKwh);
            }
        }
    }

    public class Program
    {
        public static void Main()
        {
            IDataIngestor ingestor = new RandomOutageDecorator(new DlmsIngestor());

            foreach (var (ts, kwh) in ingestor.ReadBatch(10))
            {
                Console.WriteLine($"[{ingestor.Name}] {ts:yyyy-MM-dd HH:mm} -> {kwh}");
            }
        }
    }

}
