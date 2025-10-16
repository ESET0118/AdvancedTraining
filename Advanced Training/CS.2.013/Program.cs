using CS._2._013;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CS._2._013
{
    public class Device
    {
        public string ID { get; set; }
        public string InstalledOn { get; set; }

        public virtual void  Describe()
        {
            Console.WriteLine($"Device Id: {ID}\tInstalledOn: {InstalledOn}");
        }
    }

    public class Meter : Device
    {
        public int PhaseCount { get; set; }

        public override void Describe()
        {
            Console.WriteLine($"Device Id: {ID}\tInstalledOn: {InstalledOn} \tPhaseCount: {PhaseCount}");
        }
    }
    public class Gateway : Device
    {
        public string IpAddress { get; set; }

        public Gateway()
        {

        }
        public override void Describe()
        {
            Console.WriteLine($"Device Id: {ID}\tInstalledOn: {InstalledOn} \tIpAddress: {IpAddress}");
        }
    }

}
    internal class Program
    {
    static void Main(string[] args)
    {
        Device[] devices = new Device[2];
        devices[0] = new Meter{ID = "M1001", InstalledOn = "2022-01-15", PhaseCount = 3 };
        devices[1]= new Gateway { ID = "G2001", InstalledOn = "2022-02-20", IpAddress = "255.255.255.255" };

        foreach (var device in devices)
        {
            device.Describe();
        }
    }
}
