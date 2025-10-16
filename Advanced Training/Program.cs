public class Human
{
    public string names;
    public int age;

    public void Eating()
    {
        Console.WriteLine(names + " is eating");
    }

    Human(names, age)
    {
        this.names = names;
        this.age = age;
    }

}

namespace Advanced_Training
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Enter first number : ");
            //double a=Convert.ToDouble(Console.ReadLine());
            //Console.WriteLine(a);

            //Console.WriteLine("Enter second number : ");
            //double b = Convert.ToDouble(Console.ReadLine());
            //Console.WriteLine(b);

            //double c=Math.Sqrt((a * a) + (b * b));
            //Console.WriteLine(c);

            //string fullName = "Prakritish Ghosh";
            //string num = "93241-99526";
            //num=num.Replace('-',' ');
            //fullName=fullName.Insert(0, "Mr. ");
            //Console.WriteLine(fullName);
            //Console.WriteLine(num);
            //Console.WriteLine(fullName.Length);
            //Console.WriteLine(fullName.Substring(0, 6));
            //Console.WriteLine(fullName.Substring(1));

            //Console.WriteLine("Enter your name : ");
            //string name=Console.ReadLine();

            //if (name == "")
            //{
            //    Console.WriteLine("You did not enter your name.");
            //}
            //else
            //{
            //    Console.WriteLine("Hello " + name);
            //}

            //int temp = 16;

            //Console.WriteLine((temp <= 15) ? "temp is cold" : "temp is hot");

            //string first = "Prakritish";
            //int age = 22;
            //Console.WriteLine($"{first} your age is {age}");

            //string day = "Monday";

            //switch (day)
            //{
            //    case "Monday":
            //        Console.WriteLine("Today is Monday");
            //        break;
            //    default:
            //        Console.WriteLine("Today is not Monday");
            //        break;
            //}


            ////Task 1
            //Console.WriteLine("Enter your name and marks of 5 subjects : ");
            //string name = Console.ReadLine();
            //int sub1 = Convert.ToInt32(Console.ReadLine());
            //int sub2 = Convert.ToInt32(Console.ReadLine());
            //int sub3 = Convert.ToInt32(Console.ReadLine());
            //int sub4 = Convert.ToInt32(Console.ReadLine());
            //int sub5 = Convert.ToInt32(Console.ReadLine());
            //int total = (sub1 + sub2 + sub3 + sub4 + sub5);
            //Console.WriteLine($"Total : {total}");
            //Console.WriteLine($"Average : {(total) / 5}");
            //Console.WriteLine($"Percentage : {((total) / 500.0) * 100}");
            //Console.ReadLine();
            //Console.Clear();

            ////Task 2
            //Console.WriteLine("Enter your Basic Salary : ");
            //double basic = Convert.ToDouble(Console.ReadLine());
            //double HRA = 0.2 * basic;
            //double DA = 0.1 * basic;
            //double Tax = 0.08 * basic;
            //double gross = basic + HRA + DA;
            //double netSalary = gross - Tax;
            //Console.WriteLine($"Gross Salary : {gross}");
            //Console.WriteLine($"Net Salary : {netSalary}");
            //Console.ReadLine();
            //Console.Clear();

            ////Task 3
            //Console.WriteLine("Enter the amount in INR : ");
            //double inr = Convert.ToDouble(Console.ReadLine());
            //Console.WriteLine($"USD : {(inr / 83).ToString("F2")} EUR : {(inr / 90.5).ToString("F2")}");
            //Console.WriteLine($"USD : {Math.Round((inr / 83), 2)} EUR : {Math.Round((inr / 90.5), 2)}");
            //Console.ReadLine();
            //Console.Clear();

            ////Task 4
            //Console.WriteLine("Enter time in minutes : ");
            //int minutes = Convert.ToInt32(Console.ReadLine());
            //Console.WriteLine($"Its {minutes/60} hours and {minutes%60} minutes");
            //Console.ReadLine();
            //Console.Clear();


            //for(int i = 0; i < 5; i++)
            //{
            //    for(int j = 0; j < 5; j++)
            //    {
            //        Console.Write(" * ");
            //    }
            //    Console.WriteLine();
            //}

            ////Task 1
            //Console.WriteLine("Squares      Cubes");
            //for(int i = 1; i <= 10; i++)
            //{
            //    Console.WriteLine($"{i*i}          {i*i*i}");
            //}
            //Console.ReadLine();
            //Console.Clear();

            ////Task 2
            //for(int i = 1; i <= 1000; i++)
            //{
            //    int sum = 0;
            //    for(int j = 1; j < i; j++)
            //    {

            //        if (i % j == 0)
            //        {
            //            sum += j;
            //        }
            //    }
            //    if(i==sum)
            //        Console.WriteLine(i);
            //}
            //Console.ReadLine();
            //Console.Clear();

            //Task 3
            //int sp = 0;
            //bool flag2 = false;
            //for(int i = 0; i < 5; i++)
            //{
            //    for(int j=0;j< sp; j++)
            //    {
            //        Console.Write("   ");
            //    }

            //    for (int j = sp; j < 5 - sp; j++)
            //    {
            //        Console.Write(" * ");
            //    }
            //    for (int j = sp; j < 5; j++)
            //    {
            //        Console.Write("   ");
            //    }
            //    if (sp < 2 && flag2 == false)
            //        sp++;
            //    else
            //    {
            //        flag2 = true;
            //        sp--;
            //    }
            //        Console.WriteLine();

            //}
            //Console.ReadLine();
            //Console.Clear();

            //Task 4

            //int sp2 = 4;
            //int n = 1;
            //int max = n;
            //for (int i = 0; i < 5; i++)
            //{
            //    for (int j = 0; j < sp2; j++)
            //    {
            //        Console.Write("   ");
            //    }

            //    for (int j = sp2; j < 9 - sp2; j++)
            //    {
            //        Console.Write(" " + n + " ");
            //        if (j < 4)
            //            n++;
            //        else
            //            n--;
            //    }
            //    for (int j = sp2+1; j < 7; j++)
            //    {
            //        Console.Write("   ");
            //    }
            //    sp2--;
            //    n = 1;
            //    Console.WriteLine();

            //}
            //Console.ReadLine();
            //Console.Clear();


            ////Task 5
            //int flag = 1;
            //for(int i = 0; i < 6; i++)
            //{
            //    for(int j = 0; j < i; j++)
            //    {
            //        Console.Write(flag);
            //        flag = flag==1?0:1;
            //    }
            //    Console.WriteLine();
            //}
            //Console.ReadLine();
            //Console.Clear();


            ////Task 6

            //for (int i = 100; i <= 999; i++)
            //{
            //    int sum = 0, temp = i;
            //    while (temp > 0)
            //    {
            //        sum += (temp % 10)* (temp % 10)* (temp % 10);
            //        temp /= 10;
            //    }
            //    if(sum==i)
            //        Console.WriteLine(i);
            //}

            //Console.ReadLine();
            //Console.Clear();

            ////Task 7a
            //int[] fib = new int[25];
            //int last = 25;
            //fib[0] = 0;
            //fib[1] = 1;
            //for (int k = 2; k < 25; k++)
            //{
            //    fib[k] = fib[k - 1] + fib[k - 2];
            //}
            //for (int i = 24; i >= 0; i--)
            //    Console.Write(fib[i] + " ");
            ////Console.ReadLine();
            ////Console.Clear();

            ////Task 7b
            //int last = 46368;
            //int slast = 28657;
            //Console.Write(last + " " + slast);
            //for (int i = 0; i < 23; i++)
            //{
            //    Console.Write((last - slast) + " ");
            //    int temp = slast;
            //    slast = last - slast;
            //    last = temp;
            //}
            ////Console.ReadLine();
            ////Console.Clear();

            ////Task 8
            //int min1 = 2;
            //int min2 = 9;
            //int plus1 = 4;
            //int plus2 = 11;

            //Console.WriteLine("          *                    *          ");

            //for (int i = 1; i < 4; i++)
            //{
            //    for (int j = 0; j < 14; j++)
            //    {
            //        if (j == min1 || j == min2 || j == plus1 || j == plus2)
            //            Console.Write(" * ");
            //        else
            //            Console.Write("   ");
            //    }
            //    Console.WriteLine();
            //    min1--;
            //    min2--;
            //    plus1++;
            //    plus2++;
            //}
            ////Console.ReadLine();
            ////Console.Clear();


            //Task 9
            //Console.WriteLine("Enter a number : ");
            //int n = Convert.ToInt32(Console.ReadLine());
            //int sum = 0;
            //while (n > 0)
            //{
            //    sum += n % 10;
            //    n /= 10;
            //}
            //Console.WriteLine($"Sum is : {sum}");


            Human human = new Human("Prakritish",22);
            human.Eating();

         




















        //Console.ReadKey();
        }
    }
}

