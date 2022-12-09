package in.ksix.smda;

import java.util.Properties;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@SpringBootApplication

//@EnableGlobalMethodSecurity(prePostEnabled=true)
public class SmdaApplication {

	public static void main(String[] args) {
    SpringApplication.run(SmdaApplication.class, args);
	}



}
