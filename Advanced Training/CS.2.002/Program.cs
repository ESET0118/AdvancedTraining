namespace CS._2._002
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int total=0;
            int count=0;
            for (int i= 0; i < 7; i++)
            {
                int daily=Convert.ToInt32(Console.ReadLine());
                if (daily == 0)
                
                    count++;
                    total += daily;
                
            }
            Console.WriteLine($"Total: {total}, Count of 0 days: {count}, Average: {total/7}");
        }
    }
}
