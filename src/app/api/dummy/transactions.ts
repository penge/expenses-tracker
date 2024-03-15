import { Transaction } from '../schema';

const transactions: Omit<Transaction, 'balance'>[] = [
  {
    "timestamp": 1710269311000,
    "type": "Income",
    "category": "Salary",
    "info": "Monthly paycheck",
    "value": 3500
  },
  {
    "timestamp": 1710169919000,
    "type": "Expense",
    "category": "Groceries",
    "info": "Weekly grocery shopping",
    "value": -150
  },
  {
    "timestamp": 1710021835000,
    "type": "Income",
    "category": "Freelance",
    "info": "Web design project",
    "value": 800
  },
  {
    "timestamp": 1709942040000,
    "type": "Expense",
    "category": "Utilities",
    "info": "Electricity bill",
    "value": -100
  },
  {
    "timestamp": 1709803659000,
    "type": "Expense",
    "category": "Dining",
    "info": "Dinner with friends",
    "value": -60
  },
  {
    "timestamp": 1709749092000,
    "type": "Income",
    "category": "Investment",
    "info": "Dividend payout",
    "value": 200
  },
  {
    "timestamp": 1709738359000,
    "type": "Expense",
    "category": "Transportation",
    "info": "Monthly bus pass",
    "value": -70
  },
  {
    "timestamp": 1709694929000,
    "type": "Income",
    "category": "Bonus",
    "info": "Performance bonus",
    "value": 500
  },
  {
    "timestamp": 1709645642000,
    "type": "Expense",
    "category": "Health",
    "info": "Prescription medication",
    "value": -50
  },
  {
    "timestamp": 1709547086000,
    "type": "Expense",
    "category": "Entertainment",
    "info": "Movie tickets",
    "value": -40
  },
  {
    "timestamp": 1708502942000,
    "type": "Income",
    "category": "Commission",
    "info": "Sales commission",
    "value": 250
  },
  {
    "timestamp": 1708316183000,
    "type": "Expense",
    "category": "Subscription",
    "info": "Streaming service subscription",
    "value": -15
  },
  {
    "timestamp": 1707902090000,
    "type": "Income",
    "category": "Gift",
    "info": "Birthday gift",
    "value": 50
  },
  {
    "timestamp": 1707786698000,
    "type": "Expense",
    "category": "Clothing",
    "info": "New pair of shoes",
    "value": -80
  },
  {
    "timestamp": 1707776584000,
    "type": "Income",
    "category": "Refund",
    "info": "Returned item refund",
    "value": 20
  },
  {
    "timestamp": 1707423384000,
    "type": "Expense",
    "category": "Home",
    "info": "Repairs",
    "value": -200
  },
  {
    "timestamp": 1707370566000,
    "type": "Income",
    "category": "Interest",
    "info": "Bank interest",
    "value": 10
  },
  {
    "timestamp": 1707081413000,
    "type": "Expense",
    "category": "Education",
    "info": "Textbook purchase",
    "value": -75
  },
  {
    "timestamp": 1707065409000,
    "type": "Income",
    "category": "Freelance",
    "info": "Graphic design project",
    "value": 600
  },
  {
    "timestamp": 1706535436000,
    "type": "Expense",
    "category": "Dining",
    "info": "Lunch at restaurant",
    "value": -25.3
  },
  {
    "timestamp": 1706480019000,
    "type": "Income",
    "category": "Investment",
    "info": "Stock dividends",
    "value": 150
  },
  {
    "timestamp": 1706173039000,
    "type": "Expense",
    "category": "Transportation",
    "info": "Gasoline",
    "value": -45
  },
  {
    "timestamp": 1706100298000,
    "type": "Income",
    "category": "Bonus",
    "info": "Holiday bonus",
    "value": 100.25
  },
  {
    "timestamp": 1705945297000,
    "type": "Expense",
    "category": "Utilities",
    "info": "Internet bill",
    "value": -80
  },
  {
    "timestamp": 1705864427000,
    "type": "Expense",
    "category": "Health",
    "info": "Doctor's visit",
    "value": -120.4
  },
  {
    "timestamp": 1705321016000,
    "type": "Income",
    "category": "Commission",
    "info": "Real estate commission",
    "value": 300
  },
  {
    "timestamp": 1704600265000,
    "type": "Expense",
    "category": "Entertainment",
    "info": "Concert tickets",
    "value": -70
  },
  {
    "timestamp": 1704503161000,
    "type": "Income",
    "category": "Gift",
    "info": "Wedding gift",
    "value": 75.5
  },
  {
    "timestamp": 1704117495000,
    "type": "Expense",
    "category": "Clothing",
    "info": "Jeans purchase",
    "value": -50
  },
  {
    "timestamp": 1703839705000,
    "type": "Income",
    "category": "Refund",
    "info": "Insurance refund",
    "value": 30.8
  },
  {
    "timestamp": 1703757983000,
    "type": "Expense",
    "category": "Home",
    "info": "Gardening supplies",
    "value": -40
  },
  {
    "timestamp": 1703560423000,
    "type": "Income",
    "category": "Interest",
    "info": "Investment interest",
    "value": 15
  },
  {
    "timestamp": 1703451181000,
    "type": "Expense",
    "category": "Education",
    "info": "Course materials",
    "value": -90
  },
  {
    "timestamp": 1703441512000,
    "type": "Income",
    "category": "Freelance",
    "info": "Writing project",
    "value": 400
  },
  {
    "timestamp": 1703141903000,
    "type": "Expense",
    "category": "Dining",
    "info": "Dinner date",
    "value": -70
  },
  {
    "timestamp": 1702876547000,
    "type": "Income",
    "category": "Investment",
    "info": "Bond interest",
    "value": 120.6
  },
  {
    "timestamp": 1702810914000,
    "type": "Expense",
    "category": "Transportation",
    "info": "Taxi fare",
    "value": -30
  },
  {
    "timestamp": 1702774502000,
    "type": "Income",
    "category": "Bonus",
    "info": "Quarterly bonus",
    "value": 200
  },
  {
    "timestamp": 1702659691000,
    "type": "Expense",
    "category": "Utilities",
    "info": "Water bill",
    "value": -50.8
  },
  {
    "timestamp": 1702044967000,
    "type": "Expense",
    "category": "Health",
    "info": "Gym membership",
    "value": -60
  },
  {
    "timestamp": 1702004591000,
    "type": "Income",
    "category": "Commission",
    "info": "Sales bonus",
    "value": 150
  },
  {
    "timestamp": 1701837547000,
    "type": "Expense",
    "category": "Entertainment",
    "info": "Amusement park tickets",
    "value": -100
  },
  {
    "timestamp": 1701775088000,
    "type": "Income",
    "category": "Gift",
    "info": "Christmas gift",
    "value": 100
  },
  {
    "timestamp": 1701484033000,
    "type": "Expense",
    "category": "Clothing",
    "info": "Formal attire purchase",
    "value": -120
  },
  {
    "timestamp": 1701481486000,
    "type": "Income",
    "category": "Refund",
    "info": "Electronics return refund",
    "value": 50
  },
  {
    "timestamp": 1701364734000,
    "type": "Expense",
    "category": "Home",
    "info": "Furniture purchase",
    "value": -300
  },
  {
    "timestamp": 1701252903000,
    "type": "Income",
    "category": "Interest",
    "info": "Savings account interest",
    "value": 20
  },
  {
    "timestamp": 1701045062000,
    "type": "Expense",
    "category": "Education",
    "info": "Workshop registration",
    "value": -150
  },
  {
    "timestamp": 1700707525000,
    "type": "Income",
    "category": "Freelance",
    "info": "Marketing project",
    "value": 700
  },
  {
    "timestamp": 1700335436000,
    "type": "Expense",
    "category": "Dining",
    "info": "Takeout dinner",
    "value": -35
  },
  {
    "timestamp": 1700143160000,
    "type": "Income",
    "category": "Salary",
    "info": "Monthly paycheck",
    "value": 3500
  },
  {
    "timestamp": 1700049817000,
    "type": "Expense",
    "category": "Groceries",
    "info": "Weekly grocery shopping",
    "value": -150
  },
  {
    "timestamp": 1699723592000,
    "type": "Income",
    "category": "Freelance",
    "info": "Web design project",
    "value": 800
  },
  {
    "timestamp": 1699714385000,
    "type": "Expense",
    "category": "Utilities",
    "info": "Electricity bill",
    "value": -100
  },
  {
    "timestamp": 1699540125000,
    "type": "Expense",
    "category": "Dining",
    "info": "Dinner with friends",
    "value": -60
  },
  {
    "timestamp": 1699488003000,
    "type": "Income",
    "category": "Investment",
    "info": "Dividend payout",
    "value": 200
  },
  {
    "timestamp": 1699197907000,
    "type": "Expense",
    "category": "Transportation",
    "info": "Monthly bus pass",
    "value": -70
  },
  {
    "timestamp": 1699126062000,
    "type": "Income",
    "category": "Bonus",
    "info": "Performance bonus",
    "value": 500
  },
  {
    "timestamp": 1699097860000,
    "type": "Expense",
    "category": "Health",
    "info": "Prescription medication",
    "value": -50
  },
  {
    "timestamp": 1698853298000,
    "type": "Expense",
    "category": "Entertainment",
    "info": "Movie tickets",
    "value": -40
  },
  {
    "timestamp": 1698801879000,
    "type": "Income",
    "category": "Commission",
    "info": "Sales commission",
    "value": 250
  },
  {
    "timestamp": 1698654722000,
    "type": "Expense",
    "category": "Subscription",
    "info": "Streaming service subscription",
    "value": -15
  },
  {
    "timestamp": 1698613713000,
    "type": "Income",
    "category": "Gift",
    "info": "Birthday gift",
    "value": 50
  },
  {
    "timestamp": 1698545238000,
    "type": "Expense",
    "category": "Clothing",
    "info": "New pair of shoes",
    "value": -80
  },
  {
    "timestamp": 1698486613000,
    "type": "Income",
    "category": "Refund",
    "info": "Returned item refund",
    "value": 20
  },
  {
    "timestamp": 1698250635000,
    "type": "Expense",
    "category": "Home",
    "info": "Repairs",
    "value": -200
  },
  {
    "timestamp": 1698180359000,
    "type": "Income",
    "category": "Interest",
    "info": "Bank interest",
    "value": 10
  },
  {
    "timestamp": 1698050901000,
    "type": "Expense",
    "category": "Education",
    "info": "Textbook purchase",
    "value": -75
  },
  {
    "timestamp": 1697913437000,
    "type": "Income",
    "category": "Freelance",
    "info": "Graphic design project",
    "value": 600
  },
  {
    "timestamp": 1697571928000,
    "type": "Expense",
    "category": "Dining",
    "info": "Lunch at restaurant",
    "value": -25.3
  },
  {
    "timestamp": 1696904953000,
    "type": "Income",
    "category": "Investment",
    "info": "Stock dividends",
    "value": 150
  },
  {
    "timestamp": 1696874028000,
    "type": "Expense",
    "category": "Utilities",
    "info": "Electricity bill",
    "value": -100
  },
  {
    "timestamp": 1696535806000,
    "type": "Expense",
    "category": "Transportation",
    "info": "Gasoline",
    "value": -45
  },
  {
    "timestamp": 1696106315000,
    "type": "Income",
    "category": "Bonus",
    "info": "Holiday bonus",
    "value": 100.25
  },
  {
    "timestamp": 1696102519000,
    "type": "Expense",
    "category": "Utilities",
    "info": "Internet bill",
    "value": -80
  },
  {
    "timestamp": 1695793247000,
    "type": "Income",
    "category": "Health",
    "info": "Doctor's visit reimbursement",
    "value": 120.4
  },
  {
    "timestamp": 1695477240000,
    "type": "Income",
    "category": "Commission",
    "info": "Real estate commission",
    "value": 300
  },
  {
    "timestamp": 1695220315000,
    "type": "Expense",
    "category": "Entertainment",
    "info": "Concert tickets",
    "value": -70
  },
  {
    "timestamp": 1695214710000,
    "type": "Income",
    "category": "Gift",
    "info": "Wedding gift",
    "value": 75.5
  },
  {
    "timestamp": 1695168225000,
    "type": "Expense",
    "category": "Clothing",
    "info": "Jeans purchase",
    "value": -50
  },
  {
    "timestamp": 1694844474000,
    "type": "Expense",
    "category": "Home",
    "info": "Gardening supplies",
    "value": -40
  },
  {
    "timestamp": 1694827405000,
    "type": "Income",
    "category": "Interest",
    "info": "Investment interest",
    "value": 15
  },
  {
    "timestamp": 1694702941000,
    "type": "Expense",
    "category": "Education",
    "info": "Course materials",
    "value": -90
  },
  {
    "timestamp": 1694679653000,
    "type": "Income",
    "category": "Freelance",
    "info": "Writing project",
    "value": 400
  },
  {
    "timestamp": 1694627338000,
    "type": "Expense",
    "category": "Dining",
    "info": "Dinner date",
    "value": -70
  },
  {
    "timestamp": 1694398182000,
    "type": "Income",
    "category": "Investment",
    "info": "Bond interest",
    "value": 120.6
  },
  {
    "timestamp": 1694232559000,
    "type": "Expense",
    "category": "Transportation",
    "info": "Taxi fare",
    "value": -30
  },
  {
    "timestamp": 1693972743000,
    "type": "Income",
    "category": "Bonus",
    "info": "Quarterly bonus",
    "value": 200
  },
  {
    "timestamp": 1693940301000,
    "type": "Expense",
    "category": "Utilities",
    "info": "Water bill",
    "value": -50.8
  },
  {
    "timestamp": 1693823988000,
    "type": "Expense",
    "category": "Health",
    "info": "Gym membership",
    "value": -60
  },
  {
    "timestamp": 1693633033000,
    "type": "Income",
    "category": "Commission",
    "info": "Sales bonus",
    "value": 150
  },
  {
    "timestamp": 1693616520000,
    "type": "Expense",
    "category": "Entertainment",
    "info": "Amusement park tickets",
    "value": -100
  },
  {
    "timestamp": 1692949342000,
    "type": "Income",
    "category": "Gift",
    "info": "Christmas gift",
    "value": 100
  },
  {
    "timestamp": 1692928502000,
    "type": "Expense",
    "category": "Clothing",
    "info": "Formal attire purchase",
    "value": -120
  },
  {
    "timestamp": 1692885906000,
    "type": "Income",
    "category": "Refund",
    "info": "Electronics return refund",
    "value": 50
  },
  {
    "timestamp": 1692864523000,
    "type": "Expense",
    "category": "Home",
    "info": "Furniture purchase",
    "value": -300
  },
  {
    "timestamp": 1692639705000,
    "type": "Income",
    "category": "Interest",
    "info": "Savings account interest",
    "value": 20
  },
  {
    "timestamp": 1692548528000,
    "type": "Expense",
    "category": "Education",
    "info": "Workshop registration",
    "value": -150
  },
  {
    "timestamp": 1692192200000,
    "type": "Income",
    "category": "Freelance",
    "info": "Marketing project",
    "value": 700
  },
  {
    "timestamp": 1691809150000,
    "type": "Expense",
    "category": "Dining",
    "info": "Takeout dinner",
    "value": -35
  }
];

export default transactions;
