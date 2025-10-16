namespace CS._2._003
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //string[] lines = new string[7];
            double totalOK = 0;
            int countOutage=0;
            int countTamper=0;
            string[] lines = { "2025-09-01,4.2,OK", "2025-09-02,5.0,OK", "2025-09-03,0.0,OUTAGE", "2025-09-04,3.8,OK", "2025-09-05,6.1,OK", "2025-09-06,2.5,TAMPER", "2025-09-07,5.4,OK" };
            for (int i= 0; i < lines.Length; i++)
            {
                //lines[i] = Console.ReadLine();
                string[] words = new string[3];
                words= lines[i].Split(',');
                if (words[2]=="OK")
                    totalOK+=Convert.ToDouble(words[1]);
                if(words[2]=="OUTAGE")
                    countOutage++;
                if (words[2] == "TAMPER")
                    countTamper++;
            }
            Console.WriteLine(totalOK);
            Console.WriteLine(countOutage);
            Console.WriteLine(countTamper);

        }
    }
}
