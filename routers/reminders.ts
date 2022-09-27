import  { Router } from 'express';
import createReminderDto from '../dtos/createReminder';
import Reminders from '../models/reminders';



const router = Router();

const reminders: Reminders[] = [];

router.get('/', (req,res) =>{

    // res.send('list of routers');
    res.json(reminders);
})

router.post('/', (req, res) => {
    const {title} = req.body as createReminderDto;
    const reminder = new Reminders(title)
    res.status(201).json(reminder);
    reminders.push(reminder);
})

export default router;
