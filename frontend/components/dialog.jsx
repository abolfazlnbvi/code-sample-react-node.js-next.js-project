import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from 'next/link';
import { Divider, Typography } from '@mui/material';

export default function ScrollDialog(props) {

    const [scroll, setScroll] = React.useState('paper');


    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (props.open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [props.open]);

    return (
        <React.Fragment>
            <Dialog
            
                open={props.open}
                onClose={props.handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <Typography textAlign='justify'>
                            سرویس اقساطی برای تصهیل شرایط تحصیل شما قرار داده شده و پذیرش شرایط زیر و تایید نهایی به منزله عقد قرارداد میباشد و پس از طی مراحل زیر امکان استفاده از سرویس برای شما فراهم شده و شما منطم به پرداخت اقساط در موئد مقرر می باشید.

                        </Typography>
                        <Typography variant='caption' color="red">
                            تا قبل از مرحله 5 امکان انصراف از خرید وجود دارد و  پس از تایید نهایی کاربر امکان بازگشت قرارداد وجود ندارد
                        </Typography>
                        <Divider />
                        <Typography variant='h6' color="black">
                            مراحل
                        </Typography>
                        <Typography>
                            1 - ثبت درخواست خرید اقساطی
                        </Typography>
                        <Typography>
                            2 - بررسی درخواست توسط کارشناس
                        </Typography>
                        <Typography>
                            3 -  تایید درخواست توسط کارشناس
                        </Typography>
                        <Typography>
                            4 -  تایید نهایی توسط بخش مالی
                        </Typography>
                        <Typography>
                            5 - تایید نهایی توسط کاربر
                        </Typography>
                        <Typography>
                            6 - اعطا اعتبار و ثبت نام خودکار
                        </Typography>
                        <Divider />
                        <Typography variant='h6' color="black">
                            انواع باز پرداخت
                        </Typography>
                        <Typography>
                            ماهانه
                        </Typography>
                        <Typography>
                            چهار قسط
                        </Typography>
                        <Typography>
                            شش قسط
                        </Typography>
                        <Divider />
                        <Typography variant='h6' color="black">
                            شرایط استفاده
                        </Typography>
                        <Typography>
                            1- برای تایید باید پس از مرحله 5 (تایید کاربر) 15% مبلق آزمون به عنوان پیش پرداخت واریز گردد
                        </Typography>
                        <Typography>
                            2- کاربر حداکثر 5 روز تا پس از موئد بازپرداخت باید جهت واریز وجه اقدام نماید در غیر این صورت سرویس تعلیق خواهد شد
                        </Typography>
                        <Typography>
                        </Typography>
                        <Typography>
                        </Typography>
                        <Typography>
                        </Typography>
                        <Typography>
                        </Typography>
                        <Typography>
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>انصراف</Button>
                    <Link href={props.href ? props.href : "#"}>
                        <Button onClick={() => {
                            props.handleClose()
                            props.handler()
                        }}>قبول و ادامه</Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}