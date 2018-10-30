//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//get task model
let Task     = require('../app/model/task');

//Require the dev-dependencies
let chai     = require('chai');
let chaiHttp = require('chai-http');
let server   = require('../server');
let should   = chai.should();


chai.use(chaiHttp);

//Before each test we empty the database
describe('Taks', function() {
    beforeEach((done) => {
        Task.deleteMany({}, (err) => { 
           done();           
        });        
    });

    /*
    * Test the /GET route
    */

    describe('/GET task', () => {
        it('it should ===GET=== all the tasks', (done) => {
            chai.request(server)
            .get('/task')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
        });
    });

    /*
    * Test the /POST route
    */

    describe('/POST task', () => {
        it('it should ===POST=== task', (done) => {
            let task = {
                title: 'Go to the supermarket',
                description: "Make sure to get milk, eggs and hot pockets",
                due_date: '10/28/2018',
                task_completed: false,
                task_notCompleted: false
            }
            chai.request(server)
            .post('/task')
            .send(task)
            .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('due_date');
                done();
            });
        });
    });

    /*
    * Test the /DELETE/:id route
    */

    describe('/DELETE/:id task', () => {
        it('it should ===DELETE=== a task given the id', (done) => {
            let task = new Task({
                title: 'Go to the supermarket', 
                description: 'Make sure to get milk, eggs and hot pockets', 
                due_date: '10/28/2018', 
                task_completed: false, 
                task_notCompleted: false
            });
            task.save((err, task) => {
                chai.request(server)
                .delete('/task/' + task.id)
                .end((err, res) => {
                        res.should.have.status(201);
                        res.body.should.be.a('object');
                        res.body.should.have.property('message').eql('Task successfully deleted!');
                    done();
                });
            });
        });
    });
});