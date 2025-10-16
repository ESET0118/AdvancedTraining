using LINQ_Project;
using System.Diagnostics.CodeAnalysis;
//using System.Collections.Generic;


//Employee Data
var employees = new List<Employee>

            {

                new Employee{ Id=1, Name="Ravi", Department="IT", Salary=85000, Experience=5, Location="Bangalore"},

                new Employee{ Id=2, Name="Priya", Department="HR", Salary=52000, Experience=4, Location="Pune"},

                new Employee{ Id=3, Name="Kiran", Department="Finance", Salary=73000, Experience=6, Location="Hyderabad"},

                new Employee{ Id=4, Name="Asha", Department="IT", Salary=95000, Experience=8, Location="Bangalore"},

                new Employee{ Id=5, Name="Vijay", Department="Marketing", Salary=68000, Experience=5, Location="Mumbai"},

                new Employee{ Id=6, Name="Deepa", Department="HR", Salary=61000, Experience=7, Location="Delhi"},

                new Employee{ Id=7, Name="Arjun", Department="Finance", Salary=82000, Experience=9, Location="Bangalore"},

                new Employee{ Id=8, Name="Sneha", Department="IT", Salary=78000, Experience=4, Location="Pune"},

                new Employee{ Id=9, Name="Rohit", Department="Marketing", Salary=90000, Experience=10, Location="Delhi"},

                new Employee{ Id=10, Name="Meena", Department="Finance", Salary=66000, Experience=3, Location="Mumbai"}

            };

//Product Data

var products = new List<Product>

            {

                new Product{ Id=1, Name="Laptop", Category="Electronics", Price=75000, Stock=15 },

                new Product{ Id=2, Name="Smartphone", Category="Electronics", Price=55000, Stock=25 },

                new Product{ Id=3, Name="Tablet", Category="Electronics", Price=30000, Stock=10 },

                new Product{ Id=4, Name="Headphones", Category="Accessories", Price=2000, Stock=100 },

                new Product{ Id=5, Name="Shirt", Category="Fashion", Price=1500, Stock=50 },

                new Product{ Id=6, Name="Jeans", Category="Fashion", Price=2200, Stock=30 },

                new Product{ Id=7, Name="Shoes", Category="Fashion", Price=3500, Stock=20 },

                new Product{ Id=8, Name="Refrigerator", Category="Appliances", Price=45000, Stock=8 },

                new Product{ Id=9, Name="Washing Machine", Category="Appliances", Price=38000, Stock=6 },

                new Product{ Id=10, Name="Microwave", Category="Appliances", Price=12000, Stock=12 }

            };

//Student Data

var students = new List<Student>

            {

                new Student{ Id=1, Name="Asha", Course="C#", Marks=92, City="Bangalore"},

                new Student{ Id=2, Name="Ravi", Course="Java", Marks=85, City="Pune"},

                new Student{ Id=3, Name="Sneha", Course="Python", Marks=78, City="Hyderabad"},

                new Student{ Id=4, Name="Kiran", Course="C#", Marks=88, City="Delhi"},

                new Student{ Id=5, Name="Meena", Course="Python", Marks=95, City="Bangalore"},

                new Student{ Id=6, Name="Vijay", Course="C#", Marks=82, City="Chennai"},

                new Student{ Id=7, Name="Deepa", Course="Java", Marks=91, City="Mumbai"},

                new Student{ Id=8, Name="Arjun", Course="Python", Marks=89, City="Hyderabad"},

                new Student{ Id=9, Name="Priya", Course="C#", Marks=97, City="Pune"},

                new Student{ Id=10, Name="Rohit", Course="Java", Marks=74, City="Delhi"}

            };

//Order Data

var orders = new List<Order>

            {

                new Order{ OrderId=1001, CustomerId=1, Amount=2500, OrderDate=new DateTime(2025,5,12)},

                new Order{ OrderId=1002, CustomerId=2, Amount=1800, OrderDate=new DateTime(2025,5,13)},

                new Order{ OrderId=1003, CustomerId=1, Amount=4500, OrderDate=new DateTime(2025,5,20)},

                new Order{ OrderId=1004, CustomerId=3, Amount=6700, OrderDate=new DateTime(2025,6,01)},

                new Order{ OrderId=1005, CustomerId=4, Amount=2500, OrderDate=new DateTime(2025,6,02)},

                new Order{ OrderId=1006, CustomerId=2, Amount=5600, OrderDate=new DateTime(2025,6,10)},

                new Order{ OrderId=1007, CustomerId=5, Amount=3100, OrderDate=new DateTime(2025,6,12)},

                new Order{ OrderId=1008, CustomerId=3, Amount=7100, OrderDate=new DateTime(2025,7,01)},

                new Order{ OrderId=1009, CustomerId=4, Amount=4200, OrderDate=new DateTime(2025,7,05)},

                new Order{ OrderId=1010, CustomerId=5, Amount=2900, OrderDate=new DateTime(2025,7,10)}

            };



//Tasks:
//Employee Tasks


//Display all employees working in the IT department

//List names and salaries of employees who earn more than 70,000.

//Find all employees located in Bangalore.

//Display employees having more than 5 years of experience.

//Show names of employees and their salaries in ascending order of salary.

//Group employees by location and count how many employees are in each location.
 
//Display employees whose salary is above the average salary.
 
//Show top 3 highest-paid employees.

foreach(var emp in employees)
{
    Console.WriteLine($"Id: {emp.Id} \t Name: {emp.Name} \t Department: {emp.Department} \t Salary: {emp.Salary} \t Experience: {emp.Experience} \t Location: {emp.Location}");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

var empSeventy = employees.Where(e => e.Salary > 70000);
foreach(var emp in empSeventy)
{
    Console.WriteLine($" Name: { emp.Name} \t Salary: {emp.Salary}");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

var empBangalore = employees.Where(e => e.Location == "Bangalore");
foreach(var emp in empBangalore)
{
    Console.WriteLine($"Id: {emp.Id} \t Name: {emp.Name} \t Department: {emp.Department} \t Salary: {emp.Salary} \t Experience: {emp.Experience} \t Location: {emp.Location}");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

var empExperience = employees.Where(e => e.Experience > 5);
foreach(var emp in empExperience)
{
    Console.WriteLine($"Id: {emp.Id} \t Name: {emp.Name} \t Department: {emp.Department} \t Salary: {emp.Salary} \t Experience: {emp.Experience} \t Location: {emp.Location}");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

var avg=employees.Average(e => e.Salary);
var empAboveAvg = employees.Where(e => e.Salary > avg);
foreach(var emp in empAboveAvg)
{
    Console.WriteLine($" Name: { emp.Name} \t Salary: {emp.Salary}");
}
Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

var topThree = employees.OrderByDescending(e => e.Salary).Take(3);  //Take function is used to take the top n elements from a collection.
foreach (var emp in topThree)
{
    Console.WriteLine($" Name: { emp.Name} \t Salary: {emp.Salary}");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");
Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

var empSal = employees.OrderBy(e => e.Salary);
foreach(var emp in empSal)
{
    Console.WriteLine($" Name: { emp.Name} \t Salary: {emp.Salary}");
}
Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

var grpEmp=employees.GroupBy(e=>e.Location);
foreach(var grp in grpEmp)
{
    Console.WriteLine($"Location: {grp.Key} \t Count: {grp.Count()}");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

//Product Tasks

//1.Display all products with stock less than 20.

//2. Show all products belonging to the “Fashion” category.

//3. Display product names and prices where price is greater than 10,000.

//4. List all product names sorted by price (descending).

//5.Find the most expensive product in each category.
 
//6.Show total stock per category.
 
//7.Display products whose name starts with ‘S’.
 
//8.Show average price of products in each category.

var lowStock = products.Where(p => p.Stock < 20);

foreach (var p in lowStock)
{
    Console.WriteLine($"Name: {p.Name} \t Stock: {p.Stock}");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

var fashionProducts = products.Where(p => p.Category == "Fashion");

foreach (var p in fashionProducts)
{
    Console.WriteLine($"Name: {p.Name} \t Category: {p.Category}");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

var expensiveProducts = products.Where(p => p.Price > 10000);
foreach (var p in expensiveProducts)
{
    Console.WriteLine($"Name: {p.Name} \t Price: Rs. {p.Price}");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

var sortedByPrice = products.OrderByDescending(p => p.Price);
foreach (var p in sortedByPrice)
{
    Console.WriteLine($"Name: {p.Name} \t Price: Rs. {p.Price}");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

var proCat=products.GroupBy(p => p.Category);
foreach(var cat in proCat)
{
    Console.WriteLine($"Category: {cat.Key} \t Price: Rs. { cat.Max(p => p.Price)}");
    
}


Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

foreach(var cat in proCat)
{
    var sum = 0;
    foreach(var grp in cat)
    {
        sum += grp.Stock;
    }
    Console.WriteLine($"Category: {cat.Key} \t Total Stock: {sum}");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

var proS = products.Where(p => p.Name[0] == 'S');
foreach(var s in proS)
{
    Console.WriteLine($"Name: {s.Name}");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");
Console.WriteLine("----------------------------------------------------------------------------------------------------------------");


//Student Tasks

//1.Find the highest scorer in each course.

//2.Display average marks of all students city-wise.

//3.Display names and marks of students ranked by marks.

var course = students.GroupBy(s => s.Course);
foreach(var stu in course)
{
    Console.WriteLine($"{stu.Key}: \t {stu.Max(i=>i.Marks)}");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");


var city =students.GroupBy(s => s.City);
foreach(var stu in city)
{
    Console.WriteLine($"City: {stu.Key} \t Average: { stu.Average(s=>s.Marks)}");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

var rank=students.OrderByDescending(s=>s.Marks);
foreach(var stu in rank)
{
    Console.WriteLine($"Name: {stu.Name} Marks: {stu.Marks }");
}

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");
Console.WriteLine("----------------------------------------------------------------------------------------------------------------");



//Order Tasks

//1.Find total order amount per month.

//2.Show the customer who spent the most in total.

//3.Display orders grouped by customer and show total amount spent.

//4.Display the top 2 orders with the highest amount.

var totalPerMonth = orders.GroupBy(o => o.OrderDate.Month)
    .Select(g => new { Month = g.Key, TotalAmount = g.Sum(o => o.Amount) });

foreach (var m in totalPerMonth)
    Console.WriteLine($"Month {m.Month} \t Total: Rs. {m.TotalAmount}");


Console.WriteLine("----------------------------------------------------------------------------------------------------------------");

var topCustomer = orders.GroupBy(o => o.CustomerId)
    .Select(g => new { CustomerId = g.Key, TotalSpent = g.Sum(o => o.Amount) })
    .OrderByDescending(g => g.TotalSpent)
    .First();
Console.WriteLine($"Customer ID: {topCustomer.CustomerId} \t Rs. {topCustomer.TotalSpent}");

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");


var customerTotals = orders.GroupBy(o => o.CustomerId)
    .Select(g => new { CustomerId = g.Key, TotalSpent = g.Sum(o => o.Amount) });
foreach (var c in customerTotals)
    Console.WriteLine($"Customer ID: {c.CustomerId} \t  Rs. {c.TotalSpent}");

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");


var top2Orders = orders.OrderByDescending(o => o.Amount).Take(2);
foreach (var o in top2Orders)
    Console.WriteLine($"Order ID: {o.OrderId} \t Amount: Rs. {o.Amount}");

Console.WriteLine("----------------------------------------------------------------------------------------------------------------");
Console.WriteLine("----------------------------------------------------------------------------------------------------------------");
