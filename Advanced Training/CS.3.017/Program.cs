using System;

public abstract class AlarmRule
{
    public string Name { get; }
    protected AlarmRule(string name) => Name = name;
    public abstract bool IsTriggered(LoadProfileDay day);
    public virtual string Message(LoadProfileDay day)
        => $"{Name} triggered on {day.date:yyyy-MM-dd}";
}

public class PeakOveruseRule : AlarmRule
{   // trigger if day.Total > threshold
    private readonly int _threshold;
    public PeakOveruseRule(int threshold) : base("PeakOveruse") => _threshold = threshold;
    public override bool IsTriggered(LoadProfileDay day) => day.Total > _threshold;
}

public class SustainedOutageRule : AlarmRule
{   // trigger if consecutive zero hours >= N
    private readonly int _minConsecutive;
    public SustainedOutageRule(int min) : base("SustainedOutage") => _minConsecutive = min;
    public override bool IsTriggered(LoadProfileDay day) => day.Total < _minConsecutive;
}
public class LoadProfileDay
{
    public DateTime date;
    public int Total;
}

public class HelloWorld
{
    public static void Main(string[] args)
    {
        var day = new LoadProfileDay
        {
            date = DateTime.Now,
            Total = 100
        };
        PeakOveruseRule peak = new PeakOveruseRule(50);
        if (peak.IsTriggered(day))
            Console.WriteLine(peak.Message(day));

        SustainedOutageRule outage = new SustainedOutageRule(150);
        if (outage.IsTriggered(day))
            Console.WriteLine(outage.Message(day));

    }
}

