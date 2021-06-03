package cl.cs.interlogica.utils;


import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

import static java.time.temporal.ChronoUnit.DAYS;

public class DateUtils {
    public static long getDiffDays(Timestamp current, Timestamp old) {
        long diffInMS = current.getTime() - old.getTime();
        return TimeUnit.DAYS.convert(diffInMS, TimeUnit.MILLISECONDS);
    }
}
