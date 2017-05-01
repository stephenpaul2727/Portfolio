# StephWorks
My personal Website

Website developed using Angular js and javascript!
can be reached at https://realsteph.herokuapp.com









//Initializing semaphore
initialize(i)
{
    C->value = 1
    return
}

A(Sem s)
{
    C->value--;
    if(C>value < 0)
	//block on semaphore
    return
}

B(s)
{
    C->value++;
    if(C->value <= 0)
	//unblock one process or thread that is blocked on semaphore
    return
}

