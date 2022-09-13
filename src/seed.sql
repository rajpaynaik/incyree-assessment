CREATE DATABASE Car_Parking;


use Car_Parking;
CREATE TABLE Driver(
    DriverId int  NOT NULL PRIMARY KEY,
    Car_Name varchar(50) null,
	FirstName varchar (50) NOT NULL,
	LastName varchar (50) NOT NULL,
	PhoneNumber varchar (50) NOT NULL,
	Gender varchar (10) not null,
	ParkingSlots int NOT NULL,
);



CREATE TABLE  Cars(
    CarId int  PRIMARY KEY NOT NULL,
    Registration_id int NOT NULL UNIQUE,
    DriverID int NOT NULL,
    StartingTime varchar(50) null,
    EndingTime varchar(50) null,
    Duration int null,
    TotalBill decimal  null,
    FOREIGN KEY (DriverId) REFERENCES Driver(DriverId)
    ); 


    CREATE TABLE  ParkingSlot(
        SloatId int  PRIMARY KEY NOT NULL,
        DriverId int NOT NULL,
        CarId int NOT NULL,
        StartingTime varchar(50) null,
        Duration varchar(10) null,
        Reserved int not null,
        Price decimal  null,
        FOREIGN KEY (DriverId) REFERENCES Driver(DriverId),
        FOREIGN KEY (CarId) REFERENCES Car(CarId)
        ); 
    


